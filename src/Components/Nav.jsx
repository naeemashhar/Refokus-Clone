import Button from "./Button";

const Nav = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-1 border-zinc-600">
      <div className="nleft flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-[0.01vw] h-7 bg-zinc-600"></span>
            ) : (
              <a className="text-sm flex items-center gap-1 " href="#">
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.55em #00FF19" }}
                    className="inline-block w-1.5 h-1.5 rounded bg-green-300"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      
      <Button />

    </div>
  );
};

export default Nav;
