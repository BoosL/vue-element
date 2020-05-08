import { get, post } from './http';

export const apitree = e => get('https://echarts.apache.org/examples/data/asset/data/flare.json', e)