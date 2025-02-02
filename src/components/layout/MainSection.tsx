import Column from "@/components/ui/Column";
import Container from "@/components/layout/Container";

const MainSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-6 h-[calc(100vh-280px)] overflow-y-auto">
        <Column title="To Start" color="blue" />
        <Column title="In Progress" color="yellow" />
        <Column title="Completed" color="green" />
      </div>
    </Container>
  );
};

export default MainSection;
