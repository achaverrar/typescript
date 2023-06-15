const profile = {
  name: "Alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// Object destructuring
const { age } = profile;
const { age: age2 }: { age: number } = profile;

const {
  coords: { lat, lng },
} = profile;

const {
  coords: { lat: lat2, lng: lng2 },
}: { coords: { lat: number; lng: number } } = profile;
