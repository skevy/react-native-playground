//
//  NSLocaleManager.swift
//  Wego
//
//  Created by Adam Miskiewicz on 5/14/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

import UIKit

@objc(NSLocaleManager)
class NSLocaleManager: NSObject {

  @objc func usesMetricSystem(callback: RCTResponseSenderBlock) -> Void
  {
    callback([NSLocale.currentLocale().objectForKey(NSLocaleUsesMetricSystem)!.boolValue]);
    return;
  }
}
