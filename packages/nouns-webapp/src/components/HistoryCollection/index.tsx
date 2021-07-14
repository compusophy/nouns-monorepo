import { BigNumber, BigNumberish } from 'ethers';
import StandaloneNoun from '../StandaloneNoun';
import classes from './HistoryCollection.module.css';
import clsx from 'clsx'

interface HistoryCollectionProps {
  historyCount: number;
  latestNounId: BigNumberish;
  rtl: boolean;
}

const HistoryCollection: React.FC<HistoryCollectionProps> = (props: HistoryCollectionProps) => {
  const { historyCount, latestNounId, rtl } = props;

  let nounIds = (new Array(historyCount)).fill(0).map((_, i) => BigNumber.from(latestNounId).sub(BigNumber.from(i)))
 

  return (
    <div className={clsx(classes.historyCollection, rtl && classes.rtl)}
    >
      {nounIds.map((nounId, i) => (
        <StandaloneNoun key={i} nounId={nounId.toNumber()} />
      ))}
    </div>
  );
};

export default HistoryCollection;
