import { BiChevronDown, BiChevronUp, BiMinus } from 'react-icons/bi';
import Badge from '../Badge';
import Card from '../Card/Card';
import Level from '../Level';

interface IProps {
  number?: number;
  icon?: React.ReactNode;
  prefix?: string;
  suffix?: string;
  label: string;
  color?: string;
  trend?: string;
  trendType: 'up' | 'down' | 'none';
}

function CardWidget(
  props: IProps & React.HTMLAttributes<HTMLDivElement>
): JSX.Element {
  const {
    number,
    icon,
    //prefix,
    //suffix,
    label,
    //color,
    trend,
    trendType,
    //children,
    //className,
    //...rest
  } = props;

  return (
    <Card>
      {trend && (
        <Level className='mb-3' mobile>
          <Badge
            type={
              trendType === 'up'
                ? 'success'
                : trendType === 'down'
                ? 'danger'
                : 'warning'
            }
            small
            icon={
              trendType === 'up' ? (
                <BiChevronUp size={16} />
              ) : trendType === 'down' ? (
                <BiChevronDown size={16} />
              ) : (
                <BiMinus size={16} />
              )
            }
          >
            {trend}
          </Badge>
        </Level>
      )}
      <Level mobile>
        <div>
          <h3 className='leading-tight to-gray-500 dark:to-gray-400'>
            <div className='flex flex-col justify-center'>
              <span className='text-2xl font-black'>{number}</span>
              <span className='text-gray-500 text-base'> {label}</span>
            </div>
          </h3>
        </div>
        {icon && <span>{icon}</span>}
      </Level>
    </Card>
  );
}

export default CardWidget;
