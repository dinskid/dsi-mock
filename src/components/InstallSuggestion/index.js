import './styles.css';

export default function InstallSuggestion(props) {
  return (
    <div className="suggestion">
      <div onClick={props.dismiss} className="dismiss">&times;</div>
      <span>
        You can install this as an app now! By doing so, you will be able to access the site offline and much faster!
      </span>
      <button className="btn hvr-fade btn-small" onClick={props.onInstall}>Install</button>
    </div>
  )
}