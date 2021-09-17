import { _get, buildURL } from "../../utils";

export const getAllDeliverables = () => {
  let req = {
    url: buildURL(6),
    data: {
      filters: {
      },
      rows_per_page: 1000,
    },
  };

  return _get(req);
};
