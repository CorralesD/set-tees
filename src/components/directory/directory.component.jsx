import { useDecision } from '@optimizely/react-sdk';
import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss';

const Directory = ({ categories }) => {

  const [envDecision] = useDecision('{FEATURE_FLAG_KEY}', { autoUpdate: true });

  console.log(envDecision.enabled);

    return (
        <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
    );
}

export default Directory