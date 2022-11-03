import "./styles.css";

//Partial types
interface Animal {
  walk: string;
  sleep: string;
}

const provideAbiliities = (animal: Animal, powers: Partial<Animal>) => {
  return { ...animal, ...powers };
};

console.log(
  provideAbiliities(
    {
      walk: "I can walk",
      sleep: "I can sleep"
    },
    { walk: "I can't walk" }
  )
);
