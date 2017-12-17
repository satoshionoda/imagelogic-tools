export class Ajax {

	static get(url):Promise<any>{
		return new Promise((resolve, reject) => {
			let req = new XMLHttpRequest();
			req.open("GET", url);
			req.onload = () => {

				if(req.status == 200){
					// IE9 doesn't have req.response,
					// use req.responseText instead
					resolve(req.responseText);
				}else{
					console.log("rejected");
					reject(Error(req.statusText));
				}
			};
			req.onerror = () => {
				reject(Error("Network Error"));
			};
			req.send();
		});
	}

	static post(url:string, data:any):Promise<any>{
	  return new Promise((resolve, reject) => {
      let req = new XMLHttpRequest();
      req.open("POST", url);
      req.onload = () => {
        if(req.status === 200){
          resolve(req.responseText);
        }else{
          reject(Error(req.statusText));
        }
      };
      req.onerror = () => {
        reject(Error(req.statusText));
      };
      req.send(data);
    });
  }

	static getJSON(url:string):Promise<any>{
		return Ajax.get(url).then(JSON.parse);
	}
}
