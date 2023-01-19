import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "inline-block" }}>
        <ReactLoading
          type="spin"
          color="rgb(78, 103, 224)"
          width={64}
          height={64}
        />
      </div>
    </div>
  );
};

export default Loading;
