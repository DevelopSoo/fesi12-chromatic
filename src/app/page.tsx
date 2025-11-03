export default function Home() {
  return (
    <div className="space-x-2">
      <Button bgColor="orange" textColor="rose">
        에러
      </Button>
    </div>
  );
}

function Button({
  bgColor,
  textColor,
  children,
}: {
  bgColor: string;
  textColor: string;
  children: React.ReactNode;
}) {
  return (
    <button className={`bg-${bgColor}-500 text-${textColor}-500`}>
      {children}
    </button>
  );
}
