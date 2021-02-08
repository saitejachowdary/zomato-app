export default function(url, config = {}) {
    config.credentials = 'same-origin';
    config.headers = {
    'user-key': '9e9da17c104d8a026d930a6a2d76ec80'
  }
  if(config.body) config.body = JSON.stringify(config.body);
  
  return fetch(url, config).then(res => {
    if(res.status >= 300) return Promise.reject(res);
    if(res.status === 204) return Promise.resolve();
    return Promise.resolve(res.json());
  });
}
  