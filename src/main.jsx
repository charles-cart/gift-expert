import './styles.css';

import { GiftExpertApp } from './GiftExpertApp'
import React from 'react'
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GiftExpertApp />
  </React.StrictMode>
)
