The configuration need not be complex and type-ridden. The ideal is to have the list be as simple as possible, and to identify the types of the values within at parse time. From that point, the benefits of types apply.

A remaining decision is on object instantiation. Is the runlist simply the list in a more processed form, or is it a complete living set of objects? I'm more partial to lazy instantiation here, but that remains a detail to look into.

old:
  - having them reference previously defined item in list would be complex, as then I'd have to scan all ids
    - whereas making it a practice to move them outside into a variable and then re-use, is better
      - but would conflict with referencing ids if I let them do that?
        - unless they use a specific format that only has the id, in which case it would be referencing that scanned id.. or a variable name
          - but it just seems like it is better to let them copy and paste, and encourage them to move them into variables as needed
            - simpler, achieves the objective and encourages keeping things flat
              - use the facilities we have already
                -  they technically could use the yaml extension to dupe stuff
                - or I could make something potentially error prone to enable them to do the same.. but the point being it's just complex

                - re-evaluate when we get there
