interface Props {
  contract: string;
  postedAtSlug: string;
}

export const JobOfferMetadata: React.FC<Props> = ({contract, postedAtSlug}) => (
  <div className="text-base tablet:overflow-hidden tablet:text-ellipsis tablet:whitespace-nowrap">
    <span className="text-gray-700 after:mx-3 after:inline-block after:scale-150 after:content-bullet">
      {postedAtSlug}
    </span>
    <span className="inline-block text-gray-700">{contract}</span>
  </div>
);
