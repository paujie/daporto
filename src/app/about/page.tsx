import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';
import { FaGithub, FaLinkedin, FaYoutube, FaSteam } from 'react-icons/fa';
import { FiMail, FiHome  } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.card}>
        <Image
          src="/paujie.png"
          alt="paujie"
          width={150}
          height={150}
          className={styles.profileImage}
        />

        <div className={styles.bio}>
          <h2>Tentang Saya</h2>
          <p>
            Halo! Saya Rifqi Fauzi Ramadhani, saya sangat antusias dalam menggabungkan teknologi dan kreativitas untuk meningkatkan pengalaman pengguna.
          </p>
        </div>

        <div className={styles.actions}>
          <a
            href="https://github.com/paujie"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            <FaGithub size={16} />
            <span>Github</span>
          </a>
          <a
            href="mailto:hi@paujie.com"
            className={`${styles.btn} ${styles.btnSecondary}`}
          >
            <FiMail size={16} />
            <span>Email</span>
          </a>
        </div>
      </section>

        <div className={styles.socialLinks}>
        <a href="https://www.linkedin.com/in/eki/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.youtube.com/@jierlah" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <FaYoutube size={24} />
        </a>
        <a href="https://steamcommunity.com/id/canabeast" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <FaSteam size={24} />
        </a>
      </div>

      <Link href="/" className={styles.backButton}>
        <FiHome size={16} />
        <span>Kembali ke Home</span>
      </Link>

    </div>
  );
}