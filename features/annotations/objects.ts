const profile = {
  username: "alex",
  age: 20,
  coordinates: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, username }: { age: number; username: string } = profile;
const {
  coordinates: { lat, lng },
}: { coordinates: { lat: number; lng: number } } = profile;
