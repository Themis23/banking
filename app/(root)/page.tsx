import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "Themistoklis" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions "
          />
          <TotalBalanceBox
            totalBanks={1}
            totalCurrentBalance={1250.34}
            accounts={[]}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
