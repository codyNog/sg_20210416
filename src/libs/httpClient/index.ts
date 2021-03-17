import api from "~/api/$api";
import aspida from "@aspida/axios";
import axios from "axios";
import { BASE_URL } from "~/constants/env";

export const httpClient = api(aspida(axios, { baseURL: BASE_URL }));
