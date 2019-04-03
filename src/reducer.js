import React, { Component } from 'react'

export const counterReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
      case 'INCREMENT_COUNTER':
        return { count: state.count }
      default:
        return state;
    }
  }

