import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__divText">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        cumque veniam veritatis placeat delectus eaque doloremque inventore
        ipsa, molestiae dignissimos omnis nobis, sint quisquam mollitia itaque!
        Quod unde sit quasi.
      </div>
      <div className="header__divImg">
        <Image
          className="header__img"
          src="/imgcubo.png"
          width={300}
          height={300}
          alt="img cubo"
        />
      </div>
    </header>
  );
};

export default Header;
