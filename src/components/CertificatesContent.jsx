function CertificatesContent({ certificateId, certificateLink }) {
  return (
    <div className="container mb-5">
      <p>
        <span className="font-semibold mr-5">Certificate ID: </span>
        <span className="text-trans">{certificateId}</span>
      </p>
      <p className="text-xs">
        <span className="font-semibold mr-5 text-[16px] text-">
          Certificate Link:
        </span>
        <a
          href={`https://${certificateLink}`}
          className="text-trans underline hover:text-main hover:font-semibold"
        >
          {certificateLink}
        </a>
      </p>
    </div>
  );
}

export default CertificatesContent;
