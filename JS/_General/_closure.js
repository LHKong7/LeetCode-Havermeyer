const getSecret = (secret) => {
    return {
      get: () => secret
    };
};

const obj = getSecret(1);
console.log(obj.get());
