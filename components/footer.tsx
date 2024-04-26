const Footer = () => {
  return (
    <footer className="flex h-16 items-center justify-center px-6 text-center">
      <p className="text-default-900 text-sm font-medium capitalize">
        &copy; FGLabs {new Date().getFullYear()} | Develop by 💙
      </p>
    </footer>
  );
};

export default Footer;
