import styles from "./styles.module.css"
import PropTypes from "prop-types";

Input.propTypes = {
  children: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default function Input({ children, value, onChange }) {
  return (
    <div className={styles.inputGroup}>
      <input required="" type="text" name="text" autoComplete="off" className={styles.input} value={value} onChange={onChange} />
      <label className={styles.userLabel}>{children}</label>
    </div>
  );
}
