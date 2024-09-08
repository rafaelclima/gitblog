import cover from '../assets/header_cover.svg';
import logo from '../assets/logo.svg';
export const Header = () => {
  return (
    <header
      className="w-full h-[296px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        objectFit: 'cover',
      }}>
      <img src={logo} alt="logo" className="w-[80px] h-[98px]" />
    </header>
  );
};
