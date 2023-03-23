import Image from "next/image";
import Link from "next/link";
import styles from "/styles/UserProfile.module.css";

const UserProfile = ({ showAccount, setShowAccount }) => {
  return (
    <div className={styles.profileContainer}>
      <Image
        src="/assets/image-avatar.png"
        className={styles.photo}
        width={25}
        height={25}
        alt="profile-picture"
        onClick={setShowAccount}
      />
      {showAccount && (
        <div className={styles.accountContainer}>
          <Link href="/sign-up">Sign-up</Link>
          <Link href="/login">Login</Link>{" "}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
