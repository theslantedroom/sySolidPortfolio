import "./privacyPolicy.css";

export default function IdleInfluencerPrivacyPolicy() {
  const style = {
    color: "white",
  };
  return (
    <main>
      <div style={{ ...style, height: "100%", padding: " 20px" }}>
        <h2 style={style}>Idle Influencer - Privacy Policy</h2>

        <p style={style}>
          This privacy policy applies to our mobile game Idle Influencer for iOS
          and Android devices. We take your privacy seriously, and this policy
          is designed to inform you about the data we collect and how we use it.
        </p>

        <h2 style={style}>Information We Collect</h2>
        <p style={style}>
          We may collect the following information when you use our game app:
        </p>
        <ul>
          <li style={style}>
            Device Information: We may collect information about your device,
            including device model, operating system version, and unique device
            identifiers.
          </li>
          <li style={style}>
            Usage Data: We may collect data about how you use the app, such as
            your in-game actions and interactions.
          </li>
        </ul>

        <h2 style={style}>How We Use Your Information</h2>
        <p style={style}>
          We may use the collected information for the following purposes:
        </p>
        <ul>
          <li style={style}>To improve and optimize our game app.</li>
          <li style={style}>To provide personalized in-game experiences.</li>
          <li style={style}>
            To respond to your requests and provide customer support.
          </li>
          <li style={style}>
            To comply with legal obligations and protect our rights.
          </li>
        </ul>

        <h2 style={style}>Third-Party Services</h2>
        <p style={style}>
          We do not use any third-party services that may collect information
          from you.
        </p>

        <h2 style={style}>Security</h2>
        <p style={style}>
          We take reasonable measures to protect your data, but no method of
          transmission over the internet or electronic storage is entirely
          secure. Please use our app at your own risk.
        </p>

        <h2 style={style}>Changes to this Privacy Policy</h2>
        <p style={style}>
          We may update this privacy policy to reflect changes in our practices
          or for other operational, legal, or regulatory reasons. You are
          advised to review this page periodically for any changes.
        </p>

        <h2 style={style}>Contact Us</h2>
        <p style={style}>
          If you have any questions or concerns about this privacy policy,
          please contact us at [steve@theslantedroom.ca].
        </p>
      </div>
    </main>
  );
}
