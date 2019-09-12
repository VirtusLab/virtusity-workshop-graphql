import { Episode, Review } from '../../types';

const reviews: Record<Episode, Review[]> = {
  [Episode.NEWHOPE]: [],
  [Episode.EMPIRE]: [],
  [Episode.JEDI]: [],
};

export default reviews;
