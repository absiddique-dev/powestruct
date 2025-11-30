import { z } from "zod";
import { decryptJSON } from "./encryption";

const imdos = {
  async request(query, params = [], options) {
    const request = await fetch("/api/imdos/query/" + btoa(Math.random()), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: btoa(query),
        params: params,
      }),
    });

    const response = decryptJSON(await request.json());
    if (options?.first) {
      return response?.[0];
    }
    return response;
  },

  createSchema(payloads, formData = {}) {
    const validation = {};
    const fields = [];

    Object.keys(payloads).forEach((key) => {
      const { validation: validationRule, ...fieldParams } = payloads[key];
      validation[key] = validationRule;
      fields.push({
        ...fieldParams,
        uid: key,
        default: formData?.[key] ?? payloads[key]?.default ?? "",
      });
    });

    return { validation: z.object(validation), fields };
  },

  createFilterSchema(payloads, refValues = {}) {
    const validation = {};
    const fields = [];

    Object.keys(payloads).forEach((key) => {
      const { ...fieldParams } = payloads[key];

      if (payloads[key]?.optional) {
        validation[key] = z.string().optional();
      } else {
        validation[key] = z
          .string()
          .refine(
            (val) => val.length > 0,
            `${payloads[key]?.title} is required`
          );
      }

      fields.push({
        ...fieldParams,
        uid: key,
        default: refValues?.[key] ?? payloads[key]?.default ?? "",
      });
    });

    return { validation: z.object(validation), fields };
  },

  async formSubmit(values, formData, crudConfig) {
    try {
      const formBody = new FormData();
      Object.entries(values).forEach(([key, val]) => {
        formBody.append(key, val);
      });

      if (crudConfig.fileUpload) {
        formBody.append("fileUpload", true);
        formBody.append("fileDestination", crudConfig.fileDestination);
        formBody.append("fileValidation", crudConfig.fileMemeType);
      }

      if (crudConfig.serverValidation) {
        formBody.append(
          "validation",
          JSON.stringify([crudConfig.serverValidation] ?? [])
        );
      }

      if (formData?.id) formBody.append("refId", formData?.id);

      const endpoint = formData?.id
        ? `/api/imdos/form/${crudConfig.tableName}/update`
        : `/api/imdos/form/${crudConfig.tableName}/create`;
      const request = await fetch(endpoint, { method: "POST", body: formBody });

      const response = await request.json();

      if (!request.ok) {
        throw new Error(response.error);
      }
      return { error: false, message: response.message };
    } catch (error) {
      return { error: true, message: error.message };
    }
  },
};

export default imdos;
