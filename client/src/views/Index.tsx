import { definePage } from '../utils/definePage';

type TemplateInfo = {
  name: string;
  file: string;
};

type Props = {
  templates: TemplateInfo[];
};

export const Index = (props: Props) => {
  return (
    <ul>
      {props.templates.map(template => (
        <li>
          <a href={`${ template.file }`}>{template.name}</a>
        </li>
      ))}
    </ul>
  );
};

definePage('index', Index);
