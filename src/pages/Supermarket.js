import React, {useEffect, useState} from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import ProductCard from '../components/ProductCard';
import FiltersSidebar from '../components/
