import React, { PropsWithChildren } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/react/types-6-0';

import List, { IListProps } from '../components/List';
import { EFaSolidIcons, EFaBrandsIcons, EFaRegularIcons } from '../enums/Icons';
import { ESortOrder, ESortable } from "../enums/Sort";

const stringListData = [
  'Z ... Z should be the last auf our capital lating letter indexed List items',
  'B ... The 2nd entry according to alphabetical string sort order',
  'A ... Alpha, Alef, A as in First',
  'C ... 3rd in the ABC, not part of Alphabet though, hehe'
];

const dateListData = [
  new Date('04/30/2013'),
  new Date('07/05/1981'),
  new Date('02/17/2015'),
];

const numberListData = [
  Number(Math.E),
  Number(Math.PI),
  Number(Math.sqrt(2)),
];

interface ListProps extends IListProps {
  label: string,
}

export class ListVariation extends React.Component<{ listPropsList: PropsWithChildren<ListProps>[] }, {}> {
  render() {
    const { listPropsList } = this.props;

    return (<section>
      {listPropsList.map((lp: ListProps, id) => (
        <article key={id} className="u-mb--l">
          <header><h3>{lp.label}</h3></header>
          <List {...lp} />
          <hr/>
        </article>)
      )}
    </section>);
  }
}

const Template: Story<{ listPropsList: ListProps[]}> = args => <ListVariation {...args} />;
const args = {
  icon: EFaSolidIcons.Box,
  iconSelected: EFaSolidIcons.Tasks,
  listData: stringListData,
  moduleSpecificClassList: ['u-mb--medium'],
  label: 'Default List with Icons',
};

export const ListDataTypeVariations = Template.bind({});
ListDataTypeVariations.args = {
  listPropsList: [
    { ...args, listData: stringListData, label: 'String Data' },
    { ...args, listData: numberListData, label: 'Number Data' },
    { ...args, listData: dateListData, label: 'Date Data' },
  ],
};

export const IconVariations = Template.bind({});
IconVariations.args = {
  listPropsList: [
    { ...args, listData: stringListData, icon: EFaRegularIcons.Smile, label: 'Smile Icon Variation' },
    { ...args, listData: numberListData, icon: EFaRegularIcons.Flag, label: 'Flag Icon Variation' },
    { ...args, listData: dateListData, icon: EFaBrandsIcons.GooglePlay, label: 'Google Play Brand Icon Variation' },
  ],
};

export const SelectedIconVariations = Template.bind({});
SelectedIconVariations.args = {
  listPropsList: [
    { ...args, listData: stringListData, icon: EFaRegularIcons.Smile, label: 'Smile Icon Variation with alternate selected Icon', iconSelected: EFaRegularIcons.SmileWink },
    { ...args, listData: numberListData, icon: EFaRegularIcons.Flag, label: 'Flag Icon Variation with alternate selected Icon', iconSelected: EFaRegularIcons.Bell},
    { ...args, listData: dateListData, icon: EFaBrandsIcons.GooglePlay, label: 'Google Play Brand Icon Variation with alternate selected Icon', iconSelected: EFaBrandsIcons.Gg },
  ],
};

export const SortedVariations = Template.bind({});
SortedVariations.args = {
  listPropsList: [
    { ...args, listData: stringListData, label: 'String Data', sortBy: { type: ESortable.String }, sortOrder: ESortOrder.Ascending },
    { ...args, listData: numberListData, label: 'Number Data', sortBy: { type: ESortable.Number }, sortOrder: ESortOrder.Ascending },
    { ...args, listData: dateListData, label: 'Date Data', sortBy: { type: ESortable.Date }, sortOrder: ESortOrder.Ascending },
  ],
};

export const DescendinglySortedVariations = Template.bind({});
DescendinglySortedVariations.args = {
  listPropsList: [
    { ...args, listData: stringListData, label: 'String Data', sortBy: { type: ESortable.String }, sortOrder: ESortOrder.Descending },
    { ...args, listData: numberListData, label: 'Number Data', sortBy: { type: ESortable.Number }, sortOrder: ESortOrder.Descending },
    { ...args, listData: dateListData, label: 'Date Data', sortBy: { type: ESortable.Date }, sortOrder: ESortOrder.Descending },
  ],
};

