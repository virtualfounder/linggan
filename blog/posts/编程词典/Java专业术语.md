---
# 这是文章的标题
title: Java专业术语
# # 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
order: 3
# 设置作者
author: 虚拟发现
# 设置写作时间
date: 2020-01-01
# 一个页面可以有多个分类
category:
  - 编程词典
# 一个页面可以有多个标签
tag:
  - 代码词典
  - 使用指南
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在星标文章中
star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
copyright: ©虚拟发现
---

<!-- more -->

## 代码词典

1. POJO（Plain Ordinary Java Object）：简单的Java对象，实际就是普通JavaBeans，是为了避免和EJB混淆所创造的简称。
2. PO（Persistent Object）：持久对象，在o/r映射的时候出现的概念，如果没有o/r映射，就没有这个概念。PO中应该不包含任何对数据库的操作。
3. VO（Value Object）：值对象，通常用于业务层之间的数据传递，和PO一样也是仅仅包含数据而已。
4. TO（Transfer Object）：数据传输对象，在应用程序不同层之间传输的对象。
5. BO（Business Object）：业务对象，从业务模型的角度看，它是UML元件领域模型中的领域对象。
6. DAO（Data Access Object）：数据访问对象，是一个数据访问接口，数据访问就是与数据库打交道。它夹在业务逻辑与数据库资源中间。
7. 分布式系统（Distributed System）：建立在网络之上的软件系统。由于软件特性，分布式系统具有高度的内聚性和透明性。
8. 分布式软件系统（Distributed Software Systems）：支持分布式处理的软件系统，是在由通信网络互联的多处理机体系结构上执行任务的系统。
9. 循环（Loop）：在满足条件的情况下，重复执行同一段代码。例如，while语句。
10. 迭代（Iterate）：按照某种顺序逐个访问列表中的每一项。例如，for语句。
11. 遍历（Traversal）：按照一定的规则访问树形结构中的每个节点，而且每个节点都只访问一次。
12. 递归（Recursion）：一个函数不断调用自身的行为。例如，一个递归函数可能会先做一些处理，然后调用自身来处理更小或更简单的子问题，直到达到某个终止条件为止。

这些术语在Java编程和软件开发中经常使用，理解和掌握这些术语对于Java开发者来说是非常重要的。

Java中还有许多其他专业术语，以下是一些常见的例子：

1. **HTML**：超文本标记语言（HyperText Mark-up Language），用于创建网页的标准标记语言。
2. **CSS**：层叠样式表（Cascading Style Sheets），用于描述HTML或XML（包括如SVG、XHTML等各种XML方言）文档样式的语言。
3. **JavaScript**：一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，常用于为网页添加交互性。
4. **JSTL**：JSP标准标签库（JSP Standard Tag Library），用于简化JSP页面开发的标签库。
5. **SSH**：Struts、Spring、Hibernate的简写，是Java的三大框架。
6. **EL**：表达式语言（Expression Language），用于简化JSP页面中的Java代码。
7. **API**：应用程序编程接口（Application Programming Interface），是一些预先定义的函数，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力，而又无需访问源码，或理解内部工作机制的细节。
8. **MVC模式**：一种软件架构模式，将软件系统分为三个基本部分：模型（Model）、视图（View）和控制器（Controller）。
9. **JDBC**：Java Database Connectivity，Java和数据库之间的一个桥梁，能够执行SQL语句。
10. **IP地址**：唯一标识网络上的每一台计算机，由32位组成，通常被分为4个8位的二进制数，即IPv4。
11. **HTTP协议**：超文本传输协议（Hypertext Transfer Protocol），是互联网应用最广泛的网络通信协议。
12. **面向对象的设计（OOD）**：将程序模块化、对象化，把具体事物的特性属性和通过这些属性来实现一些动作的具体方法放到一个类里面。
13. **面向对象的分析（OOA）**：一种分析系统的方法，它侧重于识别和理解系统的对象以及对象之间的关系。
14. **面向对象编程（OOP）**：一种编程范式，满足面向对象编程的语言，一般会提供类、封装、继承等语法和概念来辅助我们进行面向对象编程。
15. **面向过程程序设计（POP）**：分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候一个一个依次调用。

这些术语在Java编程和软件开发中都有广泛的应用。理解和掌握这些术语对于深入学习和应用Java语言是非常有帮助的。

MVC（Model-View-Controller）模式是一种软件架构模式，用于表示应用程序的三个基本部分：模型（Model）、视图（View）和控制器（Controller）。这种模式最早由Trygve Reenskaug提出，并最早在SmallTalk-80环境中得到应用。

MVC模式的主要目的是实现一种动态的程序设计，使得对程序的后续修改和扩展变得更加简单，同时也使得程序某一部分的重复利用成为可能。此外，它通过对复杂度的简化，使得程序结构更加直观。

在MVC模式中，“模型”部分负责对数据的直接访问，如数据库访问，它并不关心数据如何显示或如何被操作。模型类代表了应用程序的数据，这些数据通常具有一个数据验证逻辑，用来确保数据符合业务逻辑。

“视图”是Web应用程序中用来生成并显示HTML格式的服务器端对客户端请求的响应结果的模板文件。视图类从潜在的模型中获取数据，并刷新自己以显示处理结果。

“控制器”起到不同层面间的组织作用，用于控制应用程序的流程。控制器类处理客户端向Web应用程序发出的请求，获取数据，并指定返回给客户端的视图，用于显示处理结果。只要控制器改变了模型的数据或属性，所有依赖的视图都会自动更新。类似的，只要控制器改变了视图，视图会从潜在的模型中获取数据来刷新自己。

使用MVC模式开发出来的应用程序一般包括控制器、模型和视图三个部分，它们各自处理自己的任务，实现输入、处理和输出的分离。这种设计模式使得应用程序的架构更加清晰，易于维护和扩展。

除了MVC模式，Java中还有许多其他的开发模式，以下是一些常见的例子：

1. **工厂模式**：这是一种创建对象的设计模式，它允许将对象的创建过程抽象出来，并允许客户端代码使用这个抽象接口来创建对象，而不需要知道对象的具体实现细节。
2. **单例模式**：这是一种保证一个类只有一个实例的设计模式。在Java中，可以通过将类的构造函数私有化，并提供一个静态方法来实现单例模式。
3. **观察者模式**：这是一种允许对象在其他对象发生变化时接收通知的设计模式。在Java中，可以通过实现Java的Observer接口和Observable类来实现观察者模式。
4. **适配器模式**：这是一种允许对象之间进行协作的设计模式，即将一个类的接口转换为另一个类的接口，以便两个类可以协同工作。在Java中，可以通过创建一个适配器类来实现适配器模式。

此外，还有简单工厂模式、原型模式、装饰器模式、代理模式、外观模式、桥接模式、组合模式、享元模式、策略模式、模板方法模式、观察者模式、迭代子模式、责任链模式、命令模式、备忘录模式、状态模式、访问者模式、中介者模式、解释器模式等多种设计模式。

熟练掌握这些设计模式可以帮助开发人员更好地设计和组织他们的代码，提高代码的可维护性、可扩展性和可重用性。

享元模式（Flyweight Pattern）是一种用于性能优化的软件设计模式，它的主要目标是运用共享技术来有效支持大量细粒度对象的复用。享元模式通过共享已经存在的对象来大幅度减少需要创建的对象数量，避免大量相似类的开销，从而提高系统资源的利用率。

享元模式通常用于解决因大量相似对象导致的内存消耗问题。在享元模式中，对象的属性被划分为内部状态和外部状态。内部状态是共享的部分，可以在多个对象之间共享，而外部状态则是非共享的部分，它随环境的改变而改变，通常由客户端来保持。

享元模式的核心思想是通过共享技术来减少对象的数量，从而降低内存的消耗。它通过将一些不常改变或者可以共享的状态提取出来，让多个对象共享这部分状态，从而避免创建大量的相似对象。

享元模式的主要优点是可以显著提高系统性能，降低内存消耗。然而，它也有一些缺点，比如为了支持对象的共享，可能需要增加系统的复杂性，同时读取外部状态也可能会使运行时间稍微变长。

在实际应用中，享元模式常用于处理大量相似对象的情况，如围棋和五子棋中的黑白棋子、图像中的坐标点或颜色、局域网中的路由器、交换机和集线器，以及教室里的桌子和凳子等。通过将相似对象的共享部分提取出来，可以显著提高系统的性能和资源利用率。

在Java中，可以通过抽象类、接口等方式来实现享元模式。同时，享元模式也适用于其他面向对象编程语言。

当然可以。享元模式的一个典型例子是字符处理器中的字符图形。

想象一下，在一个文本编辑器或字符处理器中，每个字符都有一个特定的图形表示。如果每个字符都用一个单独的对象来表示，那么对于常见的字符（如英文字母、数字、标点符号等），将会创建大量的对象，消耗大量的内存。

然而，通过享元模式，我们可以将这些字符图形设计为可以共享的对象。我们可以创建一个字符图形库，其中包含所有可能需要的字符图形。然后，当需要显示一个字符时，我们不是创建一个新的字符图形对象，而是从字符图形库中查找该字符的图形表示，并将其返回给需要它的对象。

这样，无论我们处理多少文本，都只需要为每个独特的字符图形创建一个对象。其他所有相同类型的字符都将共享同一个对象。这可以极大地减少内存消耗，并提高程序的性能。

另一个例子是字符串的驻留（String Interning）。在Java中，字符串对象是不可变的，这意味着一旦创建了一个字符串对象，就不能更改它的值。为了优化内存使用和提高性能，Java提供了一个字符串驻留池（String Intern Pool），它存储了所有字符串对象的引用。当创建一个新的字符串对象时，Java会首先检查字符串驻留池中是否已经存在具有相同值的字符串对象。如果存在，则返回对该对象的引用，而不是创建一个新的对象。这样，相同值的字符串对象在内存中只有一份，从而节省了内存空间。

以上两个例子都展示了享元模式的核心思想：通过共享已经存在的对象来减少需要创建的对象数量，从而提高系统性能和资源利用率。

享元模式和工厂模式在目的和结构上存在明显的区别。

1. 目的：

* 享元模式的主要目标是提高系统性能，降低内存消耗。它通过共享已经存在的对象来减少需要创建的对象数量，从而节省内存空间。
* 工厂模式的主要目标是创建对象。它负责从一堆使用方式相同的产品中实例化出一个用户想要的产品实例。工厂模式更偏向于产品类级别上的划分。

2. 结构：

* 享元模式通过内部状态和外部状态的划分，实现了对象的共享。内部状态是共享的部分，可以在多个对象之间共享，而外部状态则是非共享的部分，由客户端来保持。
* 工厂模式则没有这种内部状态和外部状态的划分。它通常通过new关键字来创建对象，每个对象都是不同的实例。

总结来说，享元模式更关注于对象的共享和内存优化，而工厂模式更关注于对象的创建和实例化。在实际应用中，可以根据具体需求选择适合的设计模式来提高系统的性能和可维护性。

下面是一个简单的享元模式的Java示例代码，这个示例模拟了一个简单的形状工厂，其中圆形（Circle）和矩形（Rectangle）是两种可以共享的形状对象。

```java
// 享元接口
interface Shape {
    void draw();
}

// 具体的享元实现：圆形
class Circle implements Shape {
    private int x, y, radius;

    public Circle(int x, int y, int radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    @Override
    public void draw() {
        System.out.println("Circle: Draw() [x = " + x + ", y = " + y + ", radius = " + radius + "]");
    }
}

// 具体的享元实现：矩形
class Rectangle implements Shape {
    private int x, y, width, height;

    public Rectangle(int x, int y, int width, int height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    @Override
    public void draw() {
        System.out.println("Rectangle: Draw() [x = " + x + ", y = " + y + ", width = " + width + ", height = " + height + "]");
    }
}

// 形状工厂，用于创建和管理享元对象
class ShapeFactory {
    private static final HashMap<String, Shape> shapePool = new HashMap<>();

    // 获取形状，如果不存在则创建，否则返回已存在的形状
    public static Shape getShape(String shapeType, int x, int y, int width, int height) {
        Shape shape = shapePool.get(shapeType);
        if (shape == null) {
            if (shapeType.equals("CIRCLE")) {
                shape = new Circle(x, y, width); // 宽度作为半径传递给圆形
            } else if (shapeType.equals("RECTANGLE")) {
                shape = new Rectangle(x, y, width, height);
            }
            shapePool.put(shapeType, shape);
        }
        // 可以通过修改外部状态来改变对象的行为
        // 例如，这里我们为矩形设置新的宽度和高度，但这不会影响已经存在的其他矩形对象
        if (shape instanceof Rectangle) {
            ((Rectangle) shape).width = width;
            ((Rectangle) shape).height = height;
        }
        return shape;
    }
}

// 客户端代码
public class Client {
    public static void main(String[] args) {
        // 获取并绘制形状
        Shape shape1 = ShapeFactory.getShape("CIRCLE", 50, 50, 100, 0);
        shape1.draw();

        Shape shape2 = ShapeFactory.getShape("RECTANGLE", 100, 100, 200, 100);
        shape2.draw();

        // 由于我们使用的是享元模式，所以即使我们请求相同类型的形状，也会得到相同的对象实例
        Shape shape3 = ShapeFactory.getShape("CIRCLE", 50, 50, 100, 0);
        System.out.println(shape1 == shape3); // 输出 true，因为它们是同一个对象

        Shape shape4 = ShapeFactory.getShape("RECTANGLE", 100, 100, 300, 200);
        shape4.draw();
        System.out.println(shape2 == shape4); // 输出 false，因为矩形不是通过内部状态来共享的
    }
}
```

在这个示例中，`Shape` 接口定义了一个 `draw` 方法，它将被 `Circle` 和 `Rectangle` 类实现。`ShapeFactory` 类维护了一个 `shapePool` 来存储已经创建的形状对象。`getShape` 方法首先检查池中是否已经有相同类型的形状，如果有则返回它，否则创建一个新的形状对象并将其添加到池中。

请注意，这个示例中的矩形并不完全遵循享元模式的典型用法，因为每个矩形对象都有自己独特的宽度和高度。然而，这个示例展示了如何使用享元模式来共享圆形对象，并且展示了如何通过修改外部状态来适应不同的使用场景。在实际应用中，享元模式通常用于具有大量相似实例并且这些实例的大部分状态都可以共享的场景。
