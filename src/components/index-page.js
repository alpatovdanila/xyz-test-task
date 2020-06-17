//@flow
import * as React from 'react';
import {useHistory} from 'react-router-dom';
import {constructSearchRoutePath} from '../routing/constructSearchRoutePath';
import {SearchForm} from './search-form';
import {Empty} from "../ui/empty";

export const IndexPage = () => <Empty>Start searching by typing in the field above</Empty>