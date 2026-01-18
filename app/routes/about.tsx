import Container from "~/components/Container";

export function meta() {
  return [{ title: "About" }];
}

export default function About() {
  return (
    <>
      <Container>
        <div>
          <h3 className="text-3xl font-semibold tracking-widest">ABOUT</h3>
          <p className="text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            corrupti omnis ipsa a ducimus rerum, voluptate fuga, quaerat rem
            dolorum maxime aperiam ad id assumenda explicabo similique
            voluptatibus necessitatibus minus!
          </p>
        </div>
      </Container>
    </>
  );
}
