export default function Delete(props) {
    return (
      <>
        <button onClick={() => {texts.remove(props.texts)}} className={props.texts}>Silllll</button>
      </>
    )
  }