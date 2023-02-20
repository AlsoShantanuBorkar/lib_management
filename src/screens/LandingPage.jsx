import LandingPageHeroComponent from "../components/LandingPageHeroComponent";
import CategoryChip from "../components/CategoryChip";
import BookShowcaseCard from "../components/BookShowcaseCard";

export default function LandingPage() {
  var books = [];
  for (var i = 0; i < 10; i++) {
    books.push(<BookShowcaseCard/>);
  }
  return (
    <div>
      <LandingPageHeroComponent />
      <div className="mx-32">
        <div className="h-10" />
        <div className="mx-5 text-black font-['DM Sans'] font-semibold text-3xl">
          Categories{" "}
        </div>
        <div className="h-5" />
        <div className="grid grid-cols-5 w-full justify-evenly gap-x-5 gap-y-5 mx-5">
          <CategoryChip />
          <CategoryChip />
          <CategoryChip />
          <CategoryChip />
          <CategoryChip />
          {books}
        </div>
      </div>
    </div>
  );
}
