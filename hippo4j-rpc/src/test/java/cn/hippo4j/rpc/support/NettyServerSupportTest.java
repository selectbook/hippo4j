/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package cn.hippo4j.rpc.support;

import cn.hippo4j.common.toolkit.ThreadUtil;
import cn.hippo4j.rpc.discovery.InstanceServerLoader;
import org.junit.Assert;
import org.junit.Test;

import java.io.IOException;

public class NettyServerSupportTest {

    @Test
    public synchronized void bind() throws IOException {
        NettyServerSupport support = new NettyServerSupport(() -> 8891, InstanceServerLoader.class);
        support.bind();
        while (!support.isActive()) {
            ThreadUtil.sleep(100L);
        }
        Assert.assertTrue(support.isActive());
        support.close();
        ThreadUtil.sleep(1000L);
        Assert.assertFalse(support.isActive());
    }

}