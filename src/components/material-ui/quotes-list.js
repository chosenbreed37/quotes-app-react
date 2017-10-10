import React from 'react';
import { List, ListItem } from 'material-ui/List';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const QuotesList = ({ quotes }) => {
  return (
    <MuiThemeProvider>
      <List>
        {
          quotes.map(quote => <ListItem key={quote.id} primaryText={quote.author} secondaryText={<p>&quot;{quote.text}&quot;</p>} secondaryTextLines={2} />)
        }
      </List>
    </MuiThemeProvider>
  );
};

export default QuotesList;