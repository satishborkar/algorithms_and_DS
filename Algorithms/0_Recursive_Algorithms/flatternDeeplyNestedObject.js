const user = {
  firstName: "jan",
  lastName: "sone",
  address: {
    primary: {
      flat: "503",
      wing: "A",
      societyName: "Ks",
      area: {
        near: "abc farms",
        behind: "sam Fabric",
      },
      city: "Ravet",
      taluka: "mulshi",
      contacts: {
        personal: {
          home: "020-2098765",
          office: "020-2098765",
        },
        family: {
          home: "020-209876235",
          office: "020-20987435",
        },
      },
    },
    secondary: {
      flat: "503",
      wing: "A",
      societyName: "Ks",
      area: {
        near: "abc farms",
        behind: "sam Fabric",
      },
      city: "Ravet",
      taluka: "mulshi",
      contacts: {
        personal: {
          home: "020-2098765",
          office: "020-2098765",
        },
        family: {
          home: "020-209876235",
          office: "020-20987435",
        },
      },
    },
  },
};

const result = {};
const flattenDeeplyNestedObject = (data, prefix) => {
  if (typeof data === "object") {
    for (const property in data) {
      if (typeof data[property] === "object") {
        flattenDeeplyNestedObject(
          data[property],
          `${prefix ? `${prefix}-` : ""}${property}`
        );
      } else {
        result[`${prefix ? `${prefix}-` : ""}${property}`] = data[property];
      }
    }
  }
  return result;
};

console.log(flattenDeeplyNestedObject(user));
console.log(flattenDeeplyNestedObject(user, "satish"));
