import React from 'react';
import { Card, CardActionArea, Typography } from '@material-ui/core';

export interface IClickableItem {
  action: () => void;
  title: string;
}

export default abstract class HomeLists extends React.Component {
  public render(): React.ReactNode {
    if (!this.items.length) {
      return null;
    }
    return <div className='homeListsSection'>
      <Typography variant="h5">{this.name()}</Typography>
      { this.items.map(item =>
        <Card style={({ marginTop: '8px' })}>
          <CardActionArea style={({ padding: '12px' })}>
            <Typography variant="subtitle2">
              {item.title}
            </Typography>
          </CardActionArea>
        </Card>
      )}
    </div>;
  }

  protected abstract name(): string;
  protected abstract get items(): IClickableItem[];
}