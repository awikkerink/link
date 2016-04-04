#PROBLEM SUMMARY
Vulcanize changes default browser import behavior by "inlining" included imports.  When including multiple vulcanized packages, if there is a custom element that is common between them, something like the following error will be raised:

    Uncaught NotSupportedError: Failed to execute 'registerElement' on 'Document': Registration failed for type 'dom-module'. A type with that name is already registered.

Normally browsers "de-dup" imports.  I think this relies on imports coming form the EXACT same URL though, so I am not sure if we would have a problem even without Vulcanize when using FRAs from varying FRA CDN locations (and even if common components came from common CDN locations, I don't think we could keep versions in sync across all FRAs and the LE).

BSI only produces one vulcanized package so this is not an issue when integrating web components into the LMS only.  But it will be an issue for FRAs that are not contained within an iframe.

I think there are two scenarios that need to be addressed:
1. Polymer is typically included in all our components and will throw an error because it registers element(s).  This scenario will probably always apply.
2. If a common component is included (such as a common UI control or helper utility component).  This scenario will very often apply (likely always apply).

#EXAMPLES
There are three examples started in this branch to refer to if it helps.  Each are detailed in example1.html through example3.html.

#SOLUTION?

**SCENARIO 1 (polymer)**
1. Exclude Polymer in vulcanize build step of each FRA (that is not in an iframe).  (""--strip-exclude=polymer")
2. I am not sure if we need to do this for BSI as well and then include Polymer in the header of each LE page.  This requires follow up.

**SCENARIO 2 (common components)**
Either:
1. Exclude any components that are common with BSI in each FRAs Vulcanize build step.  This requires follow up testing.  Maybe we could make a tool to make this easier.  Note it's possible as BSI changes we could break existing FRAs (e.g. if we start using an 'iron' component that an FRA is already using).
OR
2. Create a "D2L Polymer adapter" that checks if an element is already registered or not.  This is shown in example 3, although no check for duplication is done yet.  Originally suggested by Dave.
OR
Both?

#"SOURCES"

I found this github issue discussion to be the most insightful, though there are some others:
https://github.com/Polymer/vulcanize/issues/240

There is a tool referenced ("vulcanize sharding") that might help us - but IMO it doesn't look production ready (no unit tests, not a lot of users, etc).
