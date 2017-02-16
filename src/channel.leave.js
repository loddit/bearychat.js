// Generated by ./scripts/generate-api with OpenAPI@1.0.0
// for full api documentation, visit https://github.com/bearyinnovative/OpenAPI
import qs from 'querystring';
import fetch from 'isomorphic-fetch';
import { getBasePath } from './api';
import { validate } from './_validate';

export default function channelLeave(payload) {
  return new Promise((resolve, reject) => {
    let path = '/channel.leave';
    const err = validate('POST', path, payload);
    if (err) {
      return reject(err);
    }

    const opts = {
      headers: {'Accept': 'application/json'},
      method: 'POST',
    };
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(payload);

    const api = getBasePath('https://api.bearychat.com/v1') + path;
    fetch(api, opts).then(resolve).catch(reject);
  });
}