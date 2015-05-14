//
//  NSLocaleManagerBridge.m
//  Wego
//
//  Created by Adam Miskiewicz on 5/14/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(NSLocaleManager, NSObject)

RCT_EXTERN_METHOD(usesMetricSystem:(RCTResponseSenderBlock)callback);

@end
