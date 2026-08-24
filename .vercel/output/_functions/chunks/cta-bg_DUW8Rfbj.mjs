const CTGABG = new Proxy({"src":"/_astro/cta-bg.CjKXvjIC.webp","width":5756,"height":3226,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/sardargroup-vercel/public/assets/images/cta/cta-bg.webp";
							}
							
							return target[name];
						}
					});

export { CTGABG as C };
