import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const boxStyles = {
  height: '100px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '24px',
  borderRadius: '8px',
  margin: '8px 0',
};

const TestAnimated = () => {
  const [swapped, setSwapped] = useState(false);

  const redBox = (
    <motion.div
      key="red"
      layout
      style={{ ...boxStyles, backgroundColor: 'red' }}
      transition={{ duration: 0.5 }}
    >
      Red
    </motion.div>
  );

  const blueBox = (
    <motion.div
      key="blue"
      layout
      style={{ ...boxStyles, backgroundColor: 'blue' }}
      transition={{ duration: 0.5 }}
    >
      Blue
    </motion.div>
  );

  return (
    <div style={{ width: '200px', margin: '0 auto' }}>
      <motion.div layout>
        {swapped ? (
          <>
            {blueBox}
            {redBox}
          </>
        ) : (
          <>
            {redBox}
            {blueBox}
          </>
        )}
      </motion.div>
      <button
        onClick={() => setSwapped(!swapped)}
        style={{
          marginTop: '16px',
          padding: '8px 16px',
          borderRadius: '4px',
          border: 'none',
          backgroundColor: '#333',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        Swap
      </button>
    </div>
  );
};

export default TestAnimated;
