import styles from "./styles.module.css";
import PropTypes from "prop-types";

Input.propTypes = {
  children: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default function Input({ children, value, setValue }) {
  return (
    <div className={styles.inputGroup}>
      <input
        type="text"
        name="text"
        autoComplete="off"
        className={styles.input}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <label className={styles.userLabel}>{children}</label>
    </div>
  );
}
