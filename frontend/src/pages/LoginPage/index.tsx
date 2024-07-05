import "../../index.css";
import ImageSection from "../../components/ImageSection";
import LoginFormSection from "../../components/LoginFormSection";

const LoginPage: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Image Section */}
      <ImageSection />

      {/* Login Form Section */}
      <LoginFormSection />
    </div>
  );
};

export default LoginPage;
