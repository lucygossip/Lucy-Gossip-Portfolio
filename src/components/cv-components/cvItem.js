function CvInfo({ header, details, content }) {
  return (
    <>
      <h3 class="cv-item-header">{header}</h3>
      <span class="cv-item-details">{details}</span>
      {content}
    </>
  );
}

export default function CvItem({ headerInfo, detailsInfo, contentInfo }) {
  return (
    <CvInfo header={headerInfo} details={detailsInfo} content={contentInfo} />
  );
}
